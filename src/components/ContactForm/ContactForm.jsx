import style from './ContactForm.module.css'; // Імпорт стилів з CSS-модуля
import { Form, Formik, Field, ErrorMessage } from 'formik'; // Імпорт компонентів із бібліотеки Formik
import { useDispatch } from 'react-redux'; // Імпорт хука для відправки дій у Redux
import * as Yup from "yup"; // Імпорт Yup для валідації
// import { nanoid } from 'nanoid'; // Імпорт функції для створення унікального ідентифікатора

// import { addContact } from '../../redux/contactsSlice.js'
import { addContacts } from '../../redux/contactsOps.js';
// Регулярний вираз для перевірки правильності номера телефону
const numberRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// Валідаційна схема для форми за допомогою Yup
const addUserShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long') // Мінімальна довжина імені - 3 символи
    .max(50, 'Name must be less than 50 characters long') // Максимальна довжина імені - 50 символів
    .required('Name is required'), // Поле обов'язкове для заповнення
  number: Yup.string()
    .required('Number is required') // Поле обов'язкове для заповнення
    .matches(numberRegex, 'Invalid phone number, example: 123-456-7890') // Перевірка номера за регулярним виразом
});

// Початкові значення полів форми
const INITIAL_VALUES = {
  name: '',
  number: '',
};

// Компонент форми ContactForm
const ContactForm = () => {
  // const dispatch = useDispatch(); // Ініціалізація dispatch для відправки дій у Redux

  // // Функція для додавання нового контакту
  // const addUser = (values, actions) => {
  //   // Створення нового об'єкта користувача з унікальним id
  //   const finalUser = {
  //     ...values,
  //     id: nanoid(), // Додаємо унікальний ідентифікатор
  //   };

  //   // Відправка дії в Redux для додавання контакту
  //   const action = addContact(finalUser);
  //   dispatch(action);

  //   // Скидання форми після успішного додавання
  //   actions.resetForm();
  // };

    const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // event.preventDefault();
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={addUserShema} // Валідація форми за допомогою Yup
      initialValues={INITIAL_VALUES} // Початкові значення полів форми
      onSubmit={handleSubmit} // Функція, яка буде викликана при відправці форми
    >
      {/* Компонент Form із бібліотеки Formik */}
      <Form className={style.from}>
        {/* Контейнер для полів вводу */}
        <div className={style.fromInputFieldContainer}>
          {/* Поле для вводу імені */}
          <label className={style.fromLabel}>
            <span className={style.fromSpan}>Name:</span>
            <Field className={style.fromInput} type='text' name='name' />
            {/* Відображення помилок валідації для поля 'name' */}
            <ErrorMessage name="name" component="span" className={style.error} />
          </label>

          {/* Поле для вводу номера телефону */}
          <label className={style.fromLabel}>
            <span className={style.fromSpan}>Number:</span>
            <Field className={style.fromInput} type='text' name='number' />
            {/* Відображення помилок валідації для поля 'number' */}
            <ErrorMessage name="number" component="span" className={style.error} />
          </label>
        </div>

        {/* Кнопка для відправки форми */}
        <button className={style.button} type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;


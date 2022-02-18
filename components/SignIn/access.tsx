import { Formik } from "formik";
import { useCallback } from "react";

// interface SignupProps {
//   name: string;
//   email: string;
//   password: string;
//   passwordVerify: string;
// }

function emailIsValid(value: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordVerify: "",
};

function Access() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {} as any;
          if (!values.name) {
            errors.name = "Seu nome é obrigatório, treinador!";
          } else if (values.name.length < 3) {
            errors.name = "Seu nome é muito curto, treinador!";
          }

          if (!values.email) {
            errors.email = "O e-mail é obrigatório, treinador!";
          } else if (!emailIsValid(values?.email || "")) {
            errors.email = "E-mail incorreto, treinador!";
          }

          if (!values.password) {
            errors.password = "A senha é obrigatória, treinador";
          } else if (values.password.length < 4 && values.password.length > 8) {
            errors.password =
              "A senha deve ter entre 4 e 8 caracteres, treinador!";
          }

          if (!values.passwordVerify) {
            errors.passwordVerify = "Esse campo obrigatório, treinador!";
          } else if (
            values.passwordVerify &&
            values.passwordVerify !== values.password
          ) {
            errors.passwordVerify = "As senhas não conferem, treinador!";
          }

          return errors;
        }}
        onSubmit={(values: any) => {
          handleSubmit(values);
        }}
      >
        {({
          errors,
          values,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="text-sm w-full space-y-4">
              <div className="mt-1">
                <label htmlFor="" className="block text-left text-primary-800">
                  Treinador:
                </label>
                <input
                  type="text"
                  name="name"
                  className={`block w-full outline-none focus:ring-0 border-b p-2 my-2${
                    errors.name && touched.name && errors.name
                      ? "border-red-600"
                      : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Nome do treinador"
                />
                <span className="text-left block mt-1 text-red-600 text-xs">
                  {errors.name && touched.name && errors.name}
                </span>
              </div>

              <div className="mt-1">
                <label htmlFor="" className="block text-left text-primary-800">
                  Email:
                </label>
                <input
                  type="mail"
                  name="email"
                  className={`block w-full outline-none focus:ring-0 border-b p-2 my-2${
                    errors.email && touched.email && errors.email
                      ? "border-red-600"
                      : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="E-mail"
                />
                <span className="text-left block mt-1 text-red-600 text-xs">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className="mt-1">
                <label htmlFor="" className="block text-left text-primary-800">
                  Senha:
                </label>
                <input
                  type="password"
                  name="password"
                  className={`block w-full outline-none focus:ring-0 border-b p-2 my-2${
                    errors.password && touched.password && errors.password
                      ? "border-red-600"
                      : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Digite uma senha"
                />
                <span className="text-left block mt-1 text-red-600 text-xs">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>

              <div className="mt-1">
                <label htmlFor="" className="block text-left text-primary-800">
                  Repita a senha:
                </label>
                <input
                  type="password"
                  name="passwordVerify"
                  className={`block w-full outline-none focus:ring-0 border-b p-2 my-2${
                    errors.passwordVerify &&
                    touched.passwordVerify &&
                    errors.passwordVerify
                      ? "border-red-600"
                      : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordVerify}
                  placeholder="Digite a senha novamente"
                />
                <span className="text-left block mt-1 text-red-600 text-xs">
                  {errors.passwordVerify &&
                    touched.passwordVerify &&
                    errors.passwordVerify}
                </span>
              </div>
            </div>

            <div className="sm:flex gap-4 mt-5">
              <button
                onClick={() => resetForm({ values: initialValues })}
                type="reset"
                className="my-2 w-full sm:w-40 inline items-center whitespace-nowrap px-4 py-2 border border-gray-200 text-base rounded-md font-medium shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="my-2 w-full sm:w-40 inline items-center whitespace-nowrap px-4 py-2 border border-gray-200 text-base rounded-md font-medium shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Access;

import React, { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function Form() {
  const options = ["", "Semarang", "Jakarta", "Bandung", "Medan"];

  const methods = useForm();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = methods;

  function onFormSubmit(data) {
    console.log(data);
    console.log(isValid);
  }

  const response = {
    username: "Fadhil",
  };

  useEffect(() => {
    setValue("username", response.username);
  }, []);

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            {...register("username", {
              required: "Username harus diisi",
              minLength: {
                value: 5,
                message: "Minimal 5 karakter",
              },
              maxLength: {
                value: 8,
                message: "Maksimal 8 karakter",
              },
            })}
            placeholder="username"
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username.message}</span>
          )}
          <input
            placeholder="password"
            {...register("password", { required: "Password harus diisi" })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
          <select>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <input type="submit" disabled={!isValid} />
        </form>
      </FormProvider>
    </div>
  );
}

export default Form;

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/**
 * useFormHandler هوك شامل لإدارة الفورم باستخدام RHF + Yup
 */
export const useFormHandler = (schema, defaultValues = {}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    reset,
    control,
    trigger,
    formState: {
      errors,
      isSubmitting,
      isDirty,
      isValid,
      touchedFields,
    },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  /**
   * Controller wrapper (للكاستوم components)
   */
  const ControllerField = ({ name, render }) => {
    return (
      <Controller
        name={name}
        control={control}
        render={render}
      />
    )
  };

  /**
   * set value لأي input كاستوم (بديل سريع)
   */
  const registerCustom = (name, value, options = {}) => {
    setValue(name, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
      ...options,
    });
  };

  /**
   * إضافة عنصر لمصفوفة
   */
  const addToArray = (name, item) => {
    const current = getValues(name) || [];
    setValue(name, [...current, item], {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  /**
   * حذف عنصر من مصفوفة
   */
  const removeFromArray = (name, index) => {
    const current = getValues(name) || [];
    setValue(
      name,
      current.filter((_, i) => i !== index),
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
  };

  const onSubmit = (callback) => handleSubmit(callback);

  return {
    register,
    ControllerField,
    registerCustom,
    addToArray,
    removeFromArray,
    setValue,
    watch,
    getValues,
    reset,
    control,
    trigger,
    errors,
    isSubmitting,
    isDirty,
    isValid,
    touchedFields,
    onSubmit,
  };
};
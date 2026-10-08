import { sendMessageValidator } from "../../validators/index";
import { useFormHandler } from "../../hooks/useFormHandler";
import InputField from "../ui/InputField";
import TextAreaField from "../ui/TextAreaField";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const SendEmailForm = ({ onSubmitCallback, isLoading, error, formData, isSuccess }) => {
    const [isShowMessageSuccess, setIsShowMessageSuccess] = useState(false);
    const defaultValues = { fullName: "", email: "", subject: "", message: "", };
    const handleSubmit = (data) => {
        onSubmitCallback(data);
    };
    const { register, errors, onSubmit, reset, isValid, isDirty, isSubmitting } = useFormHandler(
        sendMessageValidator(),
        defaultValues
    );
    useEffect(() => {
        if (isSuccess) {
            reset();
            setIsShowMessageSuccess(true);

            const timer = setTimeout(() => {
                setIsShowMessageSuccess(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isSuccess, reset]);
    return (
        <form 
            noValidate
            autoComplete="on"
            onSubmit={onSubmit(handleSubmit)}
            className="w-full flex flex-col gap-3"
        >
            <InputField name={"fullName"} label={formData.nameField.label} 
                placeholder={formData.nameField.placeholder} register={register} error={errors?.fullName} 
                autoComplete={"name"}
            />
            <InputField name={"email"} label={formData.emailField.label}
                placeholder={formData.emailField.placeholder} register={register} error={errors?.email} 
                autoComplete={"email"}
            />
            <InputField name={"subject"} label={formData.subjectField.label}
                placeholder={formData.subjectField.placeholder} register={register} error={errors?.subject} 
               
            />
            <TextAreaField name={"message"} label={formData.messageField.label}
                placeholder={formData.messageField.placeholder} register={register} error={errors?.message} 
               
            />
            <div className="w-full flex flex-col gap-1 mb-1">
                <div className="min-h-5">
                    <AnimatePresence mode="wait">
                        {(error || isShowMessageSuccess) && (
                            <motion.p
                                key={error ? "error" : "success"}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className={`flex items-center gap-2 text-sm break-all ${
                                    error ? "text-red-500" : "text-green-500"
                                }`}
                            >
                                {error ? (
                                    error
                                ) : (
                                    <>
                                        <CircleCheck size={18} />
                                        {formData.successMessage}
                                    </>
                                )}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={ isSubmitting || !isValid || !isDirty || isLoading }
                    className="px-6 py-3 rounded-md w-full font-medium"
                >
                    {isSubmitting ? `${formData.btnSubmit.textLoading}` : `${formData.btnSubmit.text}`}
                </Button>
            </div>
        </form>
    )
}

export default SendEmailForm;
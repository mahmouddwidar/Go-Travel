import { useState, MouseEvent } from "react";
import Checkmark from "./Icons/Checkmark";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import { AnimatePresence, motion } from "motion/react";
import useInsertLead from "../hooks/useInsertLead";

interface formState {
  currentState: "idle" | "pending" | "success" | "error";
  errorMessage: string | null;
}

export default function FrequentTraveler() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation({ fullName: "", emailAddress: "" });
  const [formState, setFormState] = useState<formState>({
    currentState: "idle",
    errorMessage: null,
  });
  const buttonStateClasses = {
    idle: "bg-primary-700 opacity-100",
    pending: "bg-primary-700 opacity-50",
    success: "bg-green opacity-100",
    error: "bg-red opacity-100",
  };

  const mutation = useInsertLead({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isChecked && isValid) {
      setFormState({ currentState: "pending", errorMessage: null });
      mutation.mutate({
        createdAt: Date.now(),
        fullName: values.fullName,
        emailAddress: values.emailAddress,
      });
    }
  }

  function handleSuccess() {
    resetForm();
    setIsChecked(false);
    setFormState({ currentState: "success", errorMessage: null });
    setTimeout(() => {
      setFormState({ currentState: "idle", errorMessage: null });
    }, 1750);
  }

  function handleError(error: Error) {
    setFormState({ currentState: "error", errorMessage: error.message });
    setTimeout(() => {
      setFormState({ currentState: "idle", errorMessage: null });
    }, 3000);
  }

  return (
    <section className="bg-primary-100 px-45.5 py-36">
      <div className="m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 border-y-gray-500/40 py-26">
        {/* Left Column */}
        <div className="basis-150 text-center">
          <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>
          <p className="text-base/13.5 text-gray-800">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>

        {/* Divider */}
        <div className="block w-0.25 self-stretch bg-gray-500/40" />

        {/* Right Column */}
        <form className="flex basis-150 flex-col">
          {/* Name */}
          <label className="mb-8">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">
              Full Name
            </p>
            <input
              required
              type="text"
              name="fullName"
              minLength={2}
              maxLength={50}
              placeholder="Jane Doe"
              onChange={handleChange}
              disabled={formState.currentState !== "idle"}
              value={values.fullName}
              className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50 ${errors.fullName && "outline-red"} `}
            />
            <AnimatePresence>
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-red pt-1 pl-0.5 text-sm"
                >
                  {errors.fullName}
                </motion.p>
              )}
            </AnimatePresence>
          </label>

          {/* Email */}
          <label className="mb-12">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>
            <input
              required
              name="emailAddress"
              minLength={3}
              maxLength={50}
              type="email"
              placeholder="janedoe@gmail.com"
              onChange={handleChange}
              disabled={formState.currentState !== "idle"}
              value={values.emailAddress}
              className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50 ${errors.emailAddress && "outline-red"}`}
            />
            <AnimatePresence>
              {errors.emailAddress && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-red pt-1 pl-0.5 text-sm"
                >
                  {errors.emailAddress}
                </motion.p>
              )}
            </AnimatePresence>
          </label>

          {/* Checkbox */}
          <div className="flex flex-wrap items-center justify-between gap-8">
            <label className="text-grey-800f flex cursor-pointer items-center gap-x-1.5">
              <button
                className="flex size-5 cursor-pointer items-center justify-center rounded-xs bg-white p-1 disabled:opacity-50"
                type="button"
                onClick={() => setIsChecked(!isChecked)}
                disabled={formState.currentState !== "idle"}
              >
                <Checkmark
                  className={`size-2 transition-all duration-200 ${isChecked ? "visible size-3 opacity-100" : "invisible size-2 opacity-0"}`}
                />
              </button>
              <p className="text-sm tracking-[.03rem]">
                Agree to receive promotional email updates
              </p>
            </label>

            {/* Submit */}
            <button
              className={`enabled:hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed ${buttonStateClasses[formState.currentState]}`}
              onClick={handleSubmit}
              disabled={formState.currentState !== "idle"}
            >
              {formState.currentState === "idle" && "Learn More"}
              {formState.currentState === "pending" && "Submitting..."}
              {formState.currentState === "success" && "Success!"}
              {formState.currentState === "error" && "Submission Failed"}
            </button>
          </div>
          {/* Error State */}
          {formState.currentState === "error" && (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.15 }}
                className="text-red mt-5 rounded-xl bg-red-200 px-5 py-2.5 font-medium"
              >
                {formState.errorMessage}
              </motion.p>
            </AnimatePresence>
          )}
        </form>
      </div>
    </section>
  );
}

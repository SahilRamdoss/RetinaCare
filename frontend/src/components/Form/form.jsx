import { useState, useEffect } from "react";


export default function DynamicForm({ 
    fields = [], 
    onSubmit, 
    OkText = "", 
    CancelText = "", 
    Title = "" }) {

    /* State Variable used to store form data */
    const [formData, setFormData] = useState(
            fields.reduce((accumulator, field) => {
                accumulator[field.name] = field.defaultValue ?? "";
                return accumulator
            }, {})
    );

    /* Event handler to update formData when form input is changed */
    const onChange = (event) => {

        /* Get the name and value of the input component which triggered this event */
        const {name, value} = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

    }

    /* Submit form data to backend */
    const onFormSubmit = (event) => {
        event.preventDefault();

        if (onSubmit){
            onSubmit(formData)
        }
    }



    return (
        <form aria-label = {Title === "" ? "Form": Title} className="w-full h-full flex flex-col gap-2" onSubmit={onFormSubmit}>
            {Title && <h2>{Title}</h2>}
            {fields.map((field) => {
                const { name, label, type, options, ...rest } = field;

                return (
                    <div key={name} className="flex flex-col">
                        {
                            label && <label htmlFor={name}>{label}</label>
                        }

                        {
                            type === "select" ?
                                <select
                                    id={name}
                                    name={name}
                                    onChange={handleChange}
                                    className= "form-input"
                                    {...rest}
                                >
                                    <option key="Option" Value="-- Select an option --" />

                                    {options?.map((option) => {
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    })}

                                </select>

                                : type === "textarea" ?

                                    <textarea
                                        id={name}
                                        name={name}
                                        onChange={handleChange}
                                        className= "form-input"
                                        {...rest}
                                    />
                                    :

                                    <input
                                        id={name}
                                        name={name}
                                        type={type}
                                        value= {formData[name]}
                                        className= "form-input"
                                        onChange={onChange}
                                        {...rest}
                                    />
                        }
                    </div>
                )
            })
            }

            <div className="w-full flex flex-row justify-start items-center gap-2">
                {CancelText && <button className="button-secondary" type="button">{CancelText}</button>}
                {OkText && <button className="button-primary" type="submit">{OkText}</button>}
            </div>
        </form>
    )
}
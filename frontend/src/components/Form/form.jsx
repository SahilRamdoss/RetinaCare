export default function DynamicForm({ fields = [], onSubmit, OkText = "", CancelText = "", Title = "" }) {
    return (
        <form aria-label = {Title === "" ? "Form": Title} className="w-full h-full flex flex-col gap-2" onSubmit={onSubmit}>
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
                                        className= "form-input"
                                        {...rest}
                                    />
                        }
                    </div>
                )
            })
            }

            <div className="w-full flex flex-row justify-start items-center gap-2">
                {CancelText && <button className="button-secondary" type="button">{CancelText}</button>}
                {OkText && <button className="button-primary" type="button">{OkText}</button>}
            </div>
        </form>
    )
}
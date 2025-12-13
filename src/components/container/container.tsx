export const Container = (props: { title?: string, subtitle?: string, description: string | object | string[] }) => {
    return (
        <article className="bg-white rounded-lg shadow-md p-8 mb-8 max-w-4xl mx-auto">
            {
                typeof props.title !== 'undefined' && (
                    <h1 className="text-4xl mb-6 text-indigo-900">{props.title}</h1>
                )
            }
            {
                typeof props.subtitle !== 'undefined' && (
                    <h2 className="text-2xl mb-4 text-indigo-900">{props.subtitle}</h2>
                )
            }
            {
                (!Array.isArray(props.description) && typeof props.description === 'string') && (
                    <p>
                        {props.description}
                    </p>
                )
            }
            {
                (!Array.isArray(props.description) && typeof props.description === 'object') && (
                    Object.entries(props.description).map(([key, value]) => {
                        if (typeof value === "string") {
                            return (<p key={key}><span className="font-semibold">{key}</span>: {value} </p>)
                        }

                        if (typeof value === "object" && "url" in value) {
                            return (
                                <p key={key}>
                                    <span className="font-semibold">{key}</span>: {' '}
                                    <a href={value.url} target="_blank" rel="noreferrer" className="hover:underline">
                                        {value.name}
                                    </a>
                                </p>
                            )
                        }

                        return null
                    })
                )
            }
            {
                Array.isArray(props.description) && (
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        {props.description.map((item, index) => (
                            ((item as string).includes("https")) ? (<li key={index}>{
                                (item as string).slice(0, item.indexOf("https"))
                            } <a href={(item as string).slice(item.indexOf("https"))} target="_blank" rel="noreferrer" className="hover:underline text-indigo-800 font-semibold">
                                    {(item as string).slice(item.indexOf("https"))}
                                </a> </li>) : (<li key={index} >{item}</li>)
                        ))}
                    </ul>
                )
            }
        </article>
    )
}
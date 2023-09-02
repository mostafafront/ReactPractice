interface Props {
    header?: string
}

export default function SectionLeft(props : Props) {

    return(
        <h2>{props.header}</h2>
    )
}
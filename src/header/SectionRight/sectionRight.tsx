import {useState} from "react";

interface Props {
    item: string[],
    item_2: string[],
    handleSelectedItem: (item: string , item_2:string) => void,
    handlClickTest: () => void
}

export default function SectionRight(props: Props) {
    let [selectedBox, setSelectedBox] = useState(0);
    return (
        <div>
            <ul className="list-group">
                {props.item.map((value: string, index: number) =>
                    <li
                        className={selectedBox === index ? "list-group-item active" : "list-group-item"}
                        key={value}
                        onClick={() => {
                            setSelectedBox(index);
                            props.handleSelectedItem(value, props.item_2[index])
                            props.handlClickTest()
                        }}>{value} {props.item_2[index]}
                    </li>)}
            </ul>
        </div>
    );
}


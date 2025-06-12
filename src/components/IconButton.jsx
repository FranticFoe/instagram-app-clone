import { Button } from "react-bootstrap";


export default function IconButton({ isTop, isBottom, className, onClick }) {
    let margin = "light";
    if (isTop) {
        margin += ` my-4`
    } else if (isBottom) {
        margin += " mt-auto mb-3"  // " " + "your"
    }

    return (
        <Button className="btn-sm" variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
            <i className={"bi bi-" + className} style={{ fontSize: "24px" }}></i>
        </Button>
    )

}
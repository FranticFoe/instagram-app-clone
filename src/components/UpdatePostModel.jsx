import { Modal, Button, Form, Image, Row, Col } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../ProfileContext";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../features/posts/postsSlice";

export default function UpdatePostModel({ show, handleClose, postId }) {
    const { image, name } = useContext(ProfileContext);
    const dispatch = useDispatch();

    const post = useSelector((state) =>
        state.posts.find((post) => post.id === postId));


    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState(""); 7
    const [invalidUrl, setInvalidUrl] = useState(false);

    useEffect(() => {
        if (post) {
            setImageUrl(post.image);
            setDescription(post.description);
        }
    }, [post])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (imageUrl) {
            dispatch(
                updatePost({ id: postId, image: imageUrl, description })
            );
            setImageUrl("");
            setDescription("");
            handleClose();
        } else {
            setInvalidUrl(true);
        }
    };

    const handleImageError = () => {
        setInvalidUrl(true);
    }

    const hanldeImageLoad = () => {
        setInvalidUrl(false);
    }

    return (
        <Modal size="lg" show={show} onHide={handleClose} centered >
            <Modal.Header>
                <Modal.Title>Edit post</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Row>
                        <Col sm={7} style={{ margin: '0px' }}>
                            <Image
                                src="https://sig1.co/img-placeholder-1"
                                alt="uploaded-content"
                                onError={handleImageError}
                                onLoad={hanldeImageLoad}
                                style={{ width: "100%" }} />
                        </Col>
                        <Col sm={5}>
                            <Image
                                src={image}
                                alt="uploaded"
                                style={{ width: "32px" }}
                                roundedCircle />
                            <span className="ms-3">{name}</span>
                            <Form.Control
                                className="my-3"
                                placeholder="Add-image URL"
                                value={imageUrl}
                                onChange={(event) => setImageUrl(event.target.value)} />
                            <Form.Control
                                className="my-3"
                                as="textarea"
                                rows={3}
                                placeholder="Write a caption"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)} />
                            {invalidUrl && (<div className="text-danger"> Invalid Url or failed to load image.</div>)}
                            <Button type="submit" style={{ width: "100%" }}>Share</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Form>
        </Modal >
    )
}
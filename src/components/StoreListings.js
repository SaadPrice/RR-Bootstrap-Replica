import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListings() {
    // Example store data, replace this with your actual data fetching logic
    const stores = [
        { name: 'ALDI', imgSrc: 'https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png', delivery: true, pickup: true },
        { name: 'Sprouts Farmers Market', imgSrc: 'https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png', delivery: true, pickup: true },
        { name: 'Kroger', imgSrc: 'https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png', delivery: true, pickup: false }
    ];

    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                {stores.map((store, index) => (
                    <Row key={index} style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginBottom: "40px" }}>
                        <Col xs=".5">
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src={store.imgSrc} roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <h5 style={{ fontWeight: "bold" }}>{store.name}</h5>
                            <p>{store.delivery ? 'Delivery' : ''} {store.delivery && store.pickup ? '*' : ''} {store.pickup ? 'Pickup' : ''}</p>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

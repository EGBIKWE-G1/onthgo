import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Breadcrumb,
    Button,
    Card,
} from 'react-bootstrap';
// import AboutSection from '../../AboutSection/AboutSections';
// import ButtonGroup from '../../ButtonGroup/ButtonGroups'
// import FormCardSection from '../../FormCardSection/FormCardSections'
// import SearchTabFormSection from '../../SearchTabFormSection/SearchTabFormSections';
import ProfileCard from './ProfileCard';
import ProfileLeftCard from './ProfileLeftCard';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'

class Profile extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <br />

                <Container className="" style={{ maxWidth: '100%' }}>
                    <h4>Account Information</h4>{' '}
                    <Col lg={12}>
                        <Row>
                            <Col md={8}>
                                {/* <Card> */}
                                <ProfileCard />
                                {/* </Card> */}
                            </Col>

                            <Col md={4}>
                                <ProfileLeftCard />
                                {/* <br/>
                                <TicketCard2/> */}
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Profile;

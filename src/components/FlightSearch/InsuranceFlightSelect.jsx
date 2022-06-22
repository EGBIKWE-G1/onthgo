import React, { Component } from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Button,
  Card,
} from 'react-bootstrap'
import AboutSection from '../AboutSection/AboutSections'
import ButtonGroup from '../ButtonGroup/ButtonGroups'
import MotorInsuranceInnerTabPanel from '../Insurance/MotorInsurance/MotorInsurance'
import InsuranceInnerTabPanel from '../Insurance/Insurance'
import SearchTabFormSection from '../SearchTabFormSection/SearchTabFormSections'
import Covid19Content from '../SearchTabFormSection/Covid19Content'
import MotorInsuranceTabContent from '../SearchTabFormSection/MotorInsuranceTabContent'
import InsuranceFilter from '../Filters/InsuranceFilter'
import OutboundCard from './../SearchTabFormSection/OutboundCard'
import TicketCard2 from './../SearchTabFormSection/TicketCard2'
import FlightInsuranceTabContent from '../SearchTabFormSection/FlightInsuranceTabContent'

import SortPanel from '../Filters/SortPanel'

class InsuranceFlightSelect extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="8">
              <Covid19Content />
              <br />
              <SortPanel />
              <br />
              <FlightInsuranceTabContent />
            </Col>
            <Col md="4">
              <OutboundCard />
              <br />
              <TicketCard2 />
            </Col>
          </Row>
        </Container>
        {/* <br />
                <br />
                <br />
                <br />
                <MotorInsuranceInnerTabPanel />
         */}
        {/* <SearchTabFormSection /> */}
        {/* <SearchTabFormSection /> */}
        <br />
        {/* <FormCardSection /> */}

        {/* <BannerSection />
                <InsuranceThumbnailSection /> */}
      </div>
    )
  }
}

export default InsuranceFlightSelect

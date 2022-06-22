import React from 'react'

export default () => {
    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ marginTop: '14px', height: '55px' }}
          >
            <Form.Row>
              <Form.Group>
                <AutoCompleteInput
                  suggestions={sources}
                  setSelectedValue={setSourceText}
                  labelText="From: "
                  icon={fromIcon}
                />
              </Form.Group>
              <Form.Group >
                <AutoCompleteInput
                  suggestions={destinations}
                  setSelectedValue={setDestinationText}
                  labelText="To: "
                  icon={toIcon}
                />
              </Form.Group>
              <Form.Group>
                <DepartureInput
                  setDepartureDateValue={setDepartureDate}
                  departureDateValue={departureDate}
                  setAddReturnValue={setAddReturn}
                  addReturnValue={addReturn}
                />
              </Form.Group>
              <Form.Group >
                <FormInput
                  type="number"
                  placeholder="Passengers"
                  icon={passengerIcon}
                  min="1"
                  setValue={setPassengerValue}
                  value={passengerValue} 
                  style={{ boxShadow: 'none',height: '42px',}}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant="danger"
                  style={{ width: '100%', height: '42px', }}
                  type="submit" 
                >
                  {searching ? 'Please wait...' : 'Search'}
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
    )
}
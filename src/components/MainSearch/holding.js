<Form>
  <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
      <Form.Label>To</Form.Label>
      <Form.Control type="text" placeholder="Zip" pattern="[0-9]{5}" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid zip.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Form.Label>From</Form.Label>
      <Form.Control type="text" placeholder="Zip" pattern="[0-9]{5}" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid zip.
      </Form.Control.Feedback>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} md="3" controlId="validationCustom03">
      <Form.Label>Weight (KG)</Form.Label>
      <Form.Control type="double" placeholder="0.5" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid weight.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="5" controlId="validationCustom04">
      <Form.Label>Dimensions (CM)</Form.Label>
      <div className="input-group mb-3">
        <Form.Control type="text" placeholder="L" aria-label="L" required />
        <span className="input-group-text">x</span>
        <Form.Control type="text" placeholder="W" aria-label="W" required />
        <span className="input-group-text">x</span>
        <Form.Control type="text" placeholder="H" aria-label="H" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid dimension.
        </Form.Control.Feedback>
      </div>
    </Form.Group>
    <div className="col-md-2 mb-3">
      <Button variant="success" size="lg" className="mt-4" type="submit">
        Search
      </Button>
    </div>
  </Row>
</Form>;

<Form>
  <Row className="mb-3">
    <Form.Group as={Col} md="5" controlId="validationCustom04">
      <Form.Label>Dimensions (CM)</Form.Label>
      <div className="input-group mb-3">
        <Form.Control type="text" placeholder="L" aria-label="L" required />
        <span className="input-group-text">x</span>
        <Form.Control type="text" placeholder="W" aria-label="W" required />
        <span className="input-group-text">x</span>
        <Form.Control type="text" placeholder="H" aria-label="H" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid dimension.
        </Form.Control.Feedback>
      </div>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom03">
      <Form.Label>Weight (KG)</Form.Label>
      <Form.Control type="double" placeholder="0.5" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid weight.
      </Form.Control.Feedback>
    </Form.Group>
    <div className="col-md-2 mb-3">
      <Button variant="success" size="lg" className="mt-4" type="submit">
        Search
      </Button>
    </div>
  </Row>
</Form>;

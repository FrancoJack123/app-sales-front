import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Button, Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import { SING_IN_VALIDATION_SCHEMA } from './utils/singIn.utils';

const SignInView = ({ onSubmit, initialValues }) => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <h3 className="text-center mb-4">Iniciar Sesión</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={SING_IN_VALIDATION_SCHEMA}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, isSubmitting, errors, touched }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Correo Electrónico">
                      <Field
                        as={Form.Control}
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        isInvalid={touched.email && !!errors.email} // Añadir estilo de error
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="email" />
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <FloatingLabel label="Contraseña">
                      <Field
                        as={Form.Control}
                        type="password"
                        name="password"
                        placeholder="Password"
                        isInvalid={touched.password && !!errors.password} // Añadir estilo de error
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="password" />
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>

                  <div className="d-grid gap-2 mt-4">
                    <Button
                      variant="dark"
                      size="md"
                      type="submit"
                      className="fw-semibold"
                      disabled={isSubmitting}
                    >
                      INICIAR SESIÓN
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt-4 text-center">
              <span>
                ¿Aún no tienes una cuenta? <a className="text-primary">Regístrate</a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInView;
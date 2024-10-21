import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Button, Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import { SING_UP_VALIDATION_SCHEMA } from './utils/singUp.utils';
import Link from '@/components/common/Link';
import { SIGN_IN_PAGE } from '@/utils/contants/paths.contants';

const SingUpView = ({ onSubmit, initialValues }) => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <h3 className="text-center mb-4">Regístrate</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={SING_UP_VALIDATION_SCHEMA}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, isSubmitting, errors, touched }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <FloatingLabel label="Nombre">
                          <Field
                            as={Form.Control}
                            type="text"
                            name="firstName"
                            placeholder="Nombre"
                            isInvalid={touched.firstName && !!errors.firstName}
                          />
                          <Form.Control.Feedback type="invalid">
                            <ErrorMessage name="firstName" />
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <FloatingLabel label="Apellido">
                          <Field
                            as={Form.Control}
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            isInvalid={touched.lastName && !!errors.lastName}
                          />
                          <Form.Control.Feedback type="invalid">
                            <ErrorMessage name="lastName" />
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Correo Electrónico">
                      <Field
                        as={Form.Control}
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="email" />
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Confirmar Correo Electrónico">
                      <Field
                        as={Form.Control}
                        type="email"
                        name="confirmEmail"
                        placeholder="Confirma tu correo electrónico"
                        isInvalid={touched.confirmEmail && !!errors.confirmEmail}
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="confirmEmail" />
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Contraseña">
                      <Field
                        as={Form.Control}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        isInvalid={touched.password && !!errors.password}
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
                      REGISTRARSE
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt-4 text-center">
              <span>
                ¿Ya tienes una cuenta?{' '}
                <Link className="text-primary" to={SIGN_IN_PAGE}>
                  Inicia Sesión
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingUpView;

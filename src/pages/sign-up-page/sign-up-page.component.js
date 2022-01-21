import React from 'react';
import './sign-up-page.styles.css';
import Banner from '../../components/banner/banner.component';
import FeaturedBoxTwo from '../../components/featured-boxes/featured-box-two.component';
import { Col, Row } from 'react-bootstrap';
import FormBox from '../../components/form-box/form-box.component';
import FormLabelBox from '../../components/form-label-box/form-label-box.component';
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa';
import CustomInput from '../../components/custom-input/custom-input.component';
import FormButton from '../../components/form-button/form-button.component';
import { Link } from 'react-router-dom';

class SignUpPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Banner />
                <FeaturedBoxTwo title='Sign Up'>
                    <Col md></Col>
                    <Col md={7}>
                        <FormBox>
                            <form>
                                <div className='form-group'>
                                    <Row>
                                        <Col md={2}>
                                            <FormLabelBox>
                                                <FaUser />
                                            </FormLabelBox>
                                        </Col>
                                        <Col md={10}>
                                            <CustomInput placeholder='Enter your lastname' type='text' name='lastname' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className='form-group'>
                                    <Row>
                                        <Col md={2}>
                                            <FormLabelBox>
                                                <FaUser />
                                            </FormLabelBox>
                                        </Col>
                                        <Col md={10}>
                                            <CustomInput placeholder='Enter your firstname' type='text' name='firstname' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className='form-group'>
                                    <Row>
                                        <Col md={2}>
                                            <FormLabelBox>
                                                <FaEnvelope />
                                            </FormLabelBox>
                                        </Col>
                                        <Col md={10}>
                                            <CustomInput placeholder='Enter your email' type='email' name='email' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className='form-group'>
                                    <Row>
                                        <Col md={2}>
                                            <FormLabelBox>
                                                <FaKey />
                                            </FormLabelBox>
                                        </Col>
                                        <Col md={10}>
                                            <CustomInput placeholder='Enter your password' type='password' name='password' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className='form-group'>
                                    <Row>
                                        <Col md={2}>
                                            <FormLabelBox>
                                                <FaKey />
                                            </FormLabelBox>
                                        </Col>
                                        <Col md={10}>
                                            <CustomInput placeholder='Confirm your password' type='password' name='confirm' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className='form-group'>
                                    <Row>
                                        <Col md={12}>
                                            <FormButton title='Sign Up' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className='form-group'>
                                    <p style={{textAlign: 'center'}}>Already have an account? <Link to='/sign-in'>
                                    Sign In Here</Link></p>
                                </div>
                            </form>
                        </FormBox>
                    </Col>
                    <Col md></Col>
                </FeaturedBoxTwo>
            </div>
        )
    }
}

export default SignUpPage;
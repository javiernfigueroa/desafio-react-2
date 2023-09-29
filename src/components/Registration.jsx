import { SocialButton } from './SocialButton';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Alert } from './Alert';
import { Form } from './Form';

export function Registration({alertMessage, setAlertMessage, alertColor, setAlertColor}) {
  return (
    <div className="container d-flex flex-column p-5 align-items-center justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-4 rounded-5 border p-4 bg-white"
        style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)'}}>
          <div className="text-center">
            <h2>Create Account</h2>
          </div>
          <div className="d-flex justify-content-center">
            <SocialButton icon={<FaTwitter />} />
            <SocialButton icon={<FaGithub />} />
            <SocialButton icon={<FaLinkedin />} />
          </div>
          <div className='d-flex flex-column justify-content-center'>
              <Form setAlertMessage={setAlertMessage} setAlertColor={setAlertColor}></Form>
              <div className='d-flex justify-content-center mt-2'>
                {alertMessage && (
                  <Alert message={alertMessage} color={alertColor}/>
                )}
              </div>
          </div>
        </div>
    </div>
  );
}

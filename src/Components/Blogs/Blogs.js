import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-dark'>
            <div className='container'>
                <div style={{ height: '120px' }}></div>
                <div className='text-white py-4'>
                    <h3 className='text-primary'>(1) What is the difference Authorization and Authentication?</h3>
                    <p><span className='fw-bold'>Authentication:</span> Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. Passwords. Usernames and passwords are the most common authentication factors. If a user enters the correct data, the system assumes the identity is valid and grants access.</p>
                    <p><span className='fw-bold'>Authorization:</span> Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege. In secure environments, authorization must always follow authentication.</p>
                </div>

                <div className='text-white py-4'>
                    <h3 className='text-primary'>(2) Why are you using Firebase? What other options do you have to impliment authentication?</h3>
                    <p className=''>Firebase Authentication provides many backend services. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Auth includes a user management system. You can save some basic data against your Firebase Auth users, and you offer multiple login methods — email/password, Google, Facebook… — and link your users’ accounts into single Firebase Auth user accounts.</p>
                </div>

                <div className='text-white py-4'>
                    <h3 className='text-primary'>(3) What other services does firebase provide other than authentication?</h3>
                    <p>
                        1. Cloud Firestore <br />
                        2. Authentication <br />
                        3. Cloud Functions<br />
                        4. Cloud Storage <br />
                        5. Google Analytics <br />
                        6. Cloud Messaging <br />
                        7. Dynamic Links <br />
                        8. Remote Config <br />

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
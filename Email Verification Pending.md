Register user api pending
Email Verification Pending
Account Linking Pending
Multi device Login pending
Intl Pending

1. OAuth Login:
   First Time Login:
   User will be created.
   User will be asigned a role of member
   Will have access to member dashboard
   if he/she is an admin, will be escalted from admin dashboard by the super admin. (additionally can send confirmation mail)

Now when he/she tries to lgoin will be redirected to admin dashboard.
Will no longer have access to member dashboard.

2. Credential Login
   First Time Login:
   User will be declined, if user does not exist
   if oauth user tries to login using credentials, it will fail, since password does not exist

   email and password is required.
   if user exist must have admin role to access admin dashboard.
   if user exist must have member role to access member dashboard.
   For further login, no extra step is required.

3. Account Creation:
   Member Role User Creation:
   It can be done through /register page and OAUth
   User will have member role.
   It can access only member and public resources.

   Admin Role User Creation:
   it can be done only through admin dashboard and Oauth but needs escalation.
   email and name is required, and random hash will be generated and emailed to the user to create credentials.
   user created will have admin role.

4. Account Linking
   OAUth to Credentials:
   User if trying to login via credenials should return Invalid Credentials, because password will not exist

   Credentials to OAuth


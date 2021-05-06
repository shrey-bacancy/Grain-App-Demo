const Strings = {
  LoginScreen: {
    Header: {
      Title: "Welcome back,",
      SubTitle: "Log In to continue",
    },
    FormInputFields: {
      Username: "Username",
      Password: "Password",
    },
    FormInputFieldsPlaceholders: {
      Username: "Enter Your Username",
      Password: "Enter Your Password",
    },
    ForgetPassword: "Forgot Password?",
    LoginButtonLabel: "Log In",
    NewUser: "New User? ",
    SignUp: "Signup",
    AlertTitle: "Something went wrong !!!",
    AlertButton: "OK",
    Errors: {
      EmailRequired: "Email is Required",
      PasswordRequired: "Password is Required",
      InvalidEmail: "Email is Invalid",
      InvalidPassword:
        "Password should be minimum 6 characters and atleast contains one number and letter",
    },
  },
  ProjectsScreen: {
    Header: {
      Title: "Projects",
      AddProject: "+ Add Project",
    },
    SearchPlaceholder: "Search Project",
    ProjectListTitle: "Project List",
    CompletedButtonLabel: "Completed",
    AddProjectModal: {
      Title: "+ Add New Project",
      ProjectNamePlaceholder: "Enter Project Name",
      ProjectDescriptionPlaceholder: "Describe here...",
      TagsPlaceholder: "Enter tags",
      AddButtonLabel: "+ Add Project",
      RequiredField: "This field is required",
    },
    CompletedProjectsModal: {
      Title: "Completed Projects",
    },
    NoProjectFoundMessage: "No Projects Found!",
    AlertTitle: {
      LoadProjects: "Error in Load Projects Handler!!!",
      CompleteProject: "Error in Complete Project Handler!!!",
      DeleteProject: "Error in Delete Project Handler!!!",
      AddProject: "Error in Add Project!!!",
    },
    AlertButton: "OK",
  },
};

export default Strings;

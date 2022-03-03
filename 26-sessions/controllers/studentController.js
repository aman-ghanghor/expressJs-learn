import { join } from "path";

class StudentController {
  static get_session_info = (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.maxAge);
    console.log(req.session.cookie.originalMaxAge);
    console.log(req.sessionID);
    res.sendFile(join(process.cwd(), "views", "index.html"));
  };

  static delete_session = (req, res) => {
    console.log(req.session);
    // destroy session - callback run after session is deleted
    req.session.destroy(() => {
      console.log("Session Deleted");
      console.log(req.session);
    });
    res.send("Session Deleted");
  };

  static regenerate_session = (req, res) => {
    req.session.regenerate(() => {
      console.log("Session Regenerated");
      console.log(req.session);
    });
    res.send("Session Regenerated");
  };

  static session_example = (req, res) => {
    // count - is a session variable
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    console.log(req.session);
    res.send(`<h1> Count: ${req.session.count} </h1>`);
  };
  
}

export default StudentController;

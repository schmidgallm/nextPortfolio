import View from "./View";

const PopularWork = () => (
  <View>
    <div className="my-5 container">
      <h2 className="text-center">Recent Work</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <h4>GDV</h4>
          <p>
            GDV is a webGL based app using three.js. It renders a 3D scrollable
            globe with spherical coordinates converted to cartesian coordinates.
            Each coordinate is clickable and renders its respective prop using
            React.
          </p>
          <hr />
          <img className="img-responsive img-fluid" src="/static/gdv.jpg" />
          <a
            href="https://github.com/schmidgallm/spaceXwatch"
            className="btn btn-primary m-2"
          >
            Code
          </a>
          <a
            href="https://tranquil-earth-67512.herokuapp.com/"
            className="btn btn-primary m-2"
          >
            Deployment
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <h4>Wedding Site</h4>
          <p>
            This wedding site is my own personal wedding registry site. It was
            used to capture everyone all RSVP into a mongoDB database complete
            with names and emails. It was later than used to send updates to all
            RSVP emails via mailchimp.
          </p>
          <hr />
          <img className="img-responsive img-fluid" src="/static/wedding.jpg" />
          <a
            href="https://github.com/schmidgallm/weddingSite"
            className="btn btn-primary m-2"
          >
            Code
          </a>
          <a
            href="https://tranquil-harbor-54583.herokuapp.com/"
            className="btn btn-primary m-2"
          >
            Deployment
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <h4>Recipe App</h4>
          <p>
            This is a simple Recipe app used for my wife whiling looking for
            meals. It is simple UI using Materialize and calling API to pull in
            recipes. Mainly to keep with Materialize and was also was curios
            about Netlify so I hosted it there.
          </p>
          <hr />
          <img className="img-responsive img-fluid" src="/static/recipe.jpg" />
          <a
            href="https://github.com/schmidgallm/React-Recipe-Finder"
            className="btn btn-primary m-2"
          >
            Code
          </a>
          <a
            href="https://fervent-heyrovsky-29505f.netlify.com/"
            className="btn btn-primary m-2"
          >
            Deployment
          </a>
        </div>
      </div>
    </div>
  </View>
);

export default PopularWork;

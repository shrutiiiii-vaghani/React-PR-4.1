import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <body  style={{ position: 'relative', height: "100vh", width: "100%" }}>
      <div class="container">
       
       <form class="row g-3"style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',color:"white"}}>
       <h1 style={{textAlign:"center"}}>Registartion Form</h1>
    <div class="col-md-6">
      <label for="validationDefault01" class="form-label">First name</label>
      <input type="text" class="form-control" id="validationDefault01" required/>
    </div>
    <div class="col-md-6">
      <label for="validationDefault02" class="form-label">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" required/>
    </div>
  
    <div class="col-md-5">
      <label for="validationDefault03" class="form-label">City</label>
      <input type="text" class="form-control" id="validationDefault03" required/>
    </div>
    <div class="col-md-4">
      <label for="validationDefault04" class="form-label">State</label>
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Choose...</option>
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chhattisgarh	</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jharkhand</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Rajasthan</option>
        <option>Uttarakhand</option>


      </select>
    </div>
    <div class="col-md-3">
      <label for="validationDefault05" class="form-label">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" required/>
    </div>
    <div class="col-md-4">
    <label for="validationDefault05" class="form-label">Date of birth</label>
      <input type="date" class="form-control" id="validationDefault05" required/>
    </div>
    <div class="col-md-4">
      <label for="validationDefaultUsername" class="form-label">Username</label>
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
    <div class="col-md-4">
    <label for="validationDefault05" class="form-label">Password</label>
      <input type="text" class="form-control" id="validationDefault05" required/>
    </div>
   
    <div class="col-10">
      <label style={{marginRight:"10px"}}>
      Choose your gender :
      </label>
      
        <input type="radio" name="gender" id="male" value="male" checked style={{marginRight:"5px"}}></input>
        <label for="male" style={{marginRight:"10px"}}>Male</label>
        <input type="radio" name="gender" id="female" value="female" style={{marginRight:"5px"}} ></input>
        <label for="female" style={{marginRight:"10px"}}>Female</label>
        <input type="radio" name="gender" id="other" value="other" style={{marginRight:"5px"}}></input>
        <label for="other" style={{marginRight:"10px"}}>Other</label>

    </div>
    <div class="col-12">
        <label for="validationDefault05" class="form-label">Bio</label>
          <input type="text" class="form-control" id="validationDefault05" required/>
    </div>
   
    
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
        <label class="form-check-label" for="invalidCheck2">
          Agree to terms and conditions
        </label>
      </div>
    </div>
    
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
       </form>
    </div>
    </body>
   
  );
}

export default App;

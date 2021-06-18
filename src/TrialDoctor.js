function TrialDoctor(){
    return(
       
		<div class="form-wrapper">
			<form class="fcorn-register container">
				<p class="register-info">Note: All fields are required.</p>
				<div class="row">
					<p class="col-md-6"><input type="text" placeholder="First Name" required/></p>
					<p class="col-md-6"><input type="text" placeholder="Last Name" required/></p>
				</div>
				<p><input type="email" placeholder="Email Address" required/>
				   <span class="extern-type">We'll keep this private.</span>
				</p>
				<p><input type="password" placeholder="Password" required/>
					<span class="extern-type">Atleast 8 characters long.</span>
				</p>
				<p><input type="password" placeholder="Verify Password" required/></p>
				<div class="row">
					<p class="col-md-4"><input type="text" placeholder="Date (dd)" required/></p>
					<p class="col-md-4"><input type="text" placeholder="Month (mm)" required/></p>
					<p class="col-md-4"><input type="text" placeholder="Year (yyyy)" required/></p>
				</div>
				<div class="row">
					<p class="col-md-6 city-wrap">
						<select>
							<option value="0" selected disabled>City</option>
							<option value="1">San José</option>
						</select>
					</p>
					<p class="col-md-6 country-wrap">
					
						<select>
							<option value="0" selected disabled>Country</option>
							<option value="1">U.S. Only</option>
							<option value="2">Outside U.S.</option>
						</select>
					</p>
          <p class="col-md-6 specialty-wrap">
						<select>
							<option value="0" selected disabled>Specialty</option>
							<option value="1">Family Medicine</option>
						</select>
                        </p>
            <p class="col-md-6 language-wrap"> 
						<select>
							<option value="0" selected disabled>Language</option>
							<option value="1">English</option>
						</select>
               <span class="extern-type">Proficient languages.</span>
					</p>
          <p class="col-md-4"><input type="text" placeholder="Medical school" required/><span class="extern-type"></span></p>
          
          <p class="col-md-4"><input type="text" placeholder="Medical ID" required/></p>
          
          <p class="col-md-4"><input type="text" placeholder="PayPal username" required/></p>
          
          
          <p class="col-md-6"><form>
            Upload your medical ID:
              <input type="file" name="fileToUpload" id="fileToUpload"/>
              <input type="submit" value="Upload Image" name="submit" required/></form>
           </p>
          
          
          <p class="col-md-6"><form>
            Upload your personal photo:
              <input type="file" name="fileToUpload" id="fileToUpload"/>
              <input type="submit" value="Upload Image" name="submit" required/>
              <span class="extern-type">Professional clothing required.</span>
              </form>
           </p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Facebook profile link" required/></p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Linkedin profile link" required/></p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Twitter username" required/></p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Instagram username" required/></p>
          
        </div>
        	<p class="register-toggle">
					<label for="register-agree" class="toggle-label" data-on="YES" data-off="NO">
						<input type="checkbox" id="register-agree" class="toggle-input"/>
						<span class="toggle-handle"></span>
					</label>
					<span class="info">Do you agree to the <a href="#">terms and conditions?</a></span>
				</p>
				<p class="register-submit"><input type="submit" value="Register Now"/></p>
			</form>
		</div>
	

    )
}
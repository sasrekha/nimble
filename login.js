export default function Login() {
    return (
           <div><input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="D2D5B731">
           <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAAdOseNij60cRgEHOAlVd1w0d7RnisS1PiyBpYEMF6nUbKL48ejadnCtfi7u4BZQrYmEjpeLrmHBxDz9ChAIXwkhqFe59uEio+bAp/33YZOR3Vvv90Pojif5f4vmhiSDFhcRCUl6K/i/7x7q2HzhIX2d5KjjftmnIYpgQ1f69qPMhMbNwkRg1veohFG05DK7lfA=">
       </div>
                           
                               <span id="cvInvalidUser" style="color:Red;font-size:12px;padding-left:80px;visibility:hidden;">Please enter a valid Email ID or Password.</span>
                               <div class="logoblk text-center"  >
                                 
                                 <img src="images/logo_white.png" alt="" style="width: 200px;padding-left: 150px;">
                               </div>
                               
                               
                                    
                               <div class="wrap-input100 validate-input" data-validate="Enter username" style="padding-top: 15px;padding-left: 150px;">
                                   <input name="tbUserName" type="text" id="tbUserName" class="input100" style="background: #FFFFFF;
                                   border: 1px solid rgba(0, 0, 0, 0.71);
                                   border-radius: 30px;width: 220px;height: 30px;padding: 10px;" placeholder="Username" tabindex="1" autocomplete="off">
                                   
                                   <span class="focus-input100" data-placeholder=""></span>
                               </div>
                               
                               <div class="wrap-input100 validate-input" data-validate="Enter password" style="padding-top: 15px;padding-left: 150px;">
                                   <input name="tbPassword" type="password" id="tbPassword" class="input100"  style="background: #FFFFFF;
                                   border: 1px solid rgba(0, 0, 0, 0.71);
                                   border-radius: 30px;width: 220px;height: 30px;padding: 10px;" placeholder="Password" tabindex="2">
                                   
                                   <span class="focus-input100" data-placeholder=""></span>
                               </div>
       
                               <div class="contact100-form-checkbox" style="padding-top: 25px;padding-left: 150px;">
                                   <span clientinstancename="chRememberMe"><input id="chkRememberMe" type="checkbox" name="chkRememberMe" tabindex="3"><label for="chkRememberMe">Remember me</label></span>
                                   <div class="clear"></div>
                               </div>
       
                               <div class="container-login100-form-btn" style="padding-top: 10px;padding-left: 200px;">
                                   <input type="submit" name="bLoginButton" value="Login" id="bLoginButton" tabindex="5" class="login100-form-btn" style="cursor:pointer;background: #6380eb;
                                   border-radius: 30px;width: 150px;height: 30px;">
                               </div>
       
                               <div class="text-center p-t-30" style="padding-top: 10px;padding-left: 200px;">
                                   <a href="UserManagement/ForgotPwd.aspx" class="txt1" tabindex="4"><strong>Forgot Password ?</strong></a>
                               </div></div>
    )
}
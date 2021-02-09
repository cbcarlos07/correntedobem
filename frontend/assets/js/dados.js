const socket = io('http://localhost:3006')
const api = 'http://localhost:3006/api/v1'



$(()=>{
    loadMenu()
    loadPosts()
})

const loadMenu = () => {
    $.ajax({
        url: `${api}/menu`,
        type: 'get',
        dataType: 'json'
    }).then(response => {
        const item = response.map( m =>{
            return $('<li>')
                        .append( $('<a>').attr('href',m.url).append( m.name ) )
        } )

        $('.nav-menu').append( item )
    })

}

const loadPosts = () => {
    $.ajax({
        url: `${api}/area/sub-area`,
        type: 'get',
        dataType: 'json'
    }).then(response => {
        console.log('response',response);
        let item = ''
        response.forEach(element => {
            let subarea = ''
            if( element.subarea ) {
                element.subarea.forEach(el => {
                    subarea += `
                    <div class="col-lg-4 col-md-6" data-aos="zoom-in">
                        <div class="box">
                        <div class="icon"><a href=""><i class="fa fa-desktop"></i></a></div>
                        <h4 class="title"><a href="">${el.title}</a></h4>
                        <p class="description">${el.description}</p>
                        </div>
                  </div>`
                    
                });
            }
            item += `
            <section id="${element.url}">
                <div class="container" data-aos="fade-up">
                    <div class="row about-container">
                        <div class="col-lg-12 content order-lg-1 order-2">
                            <div class="section-header">
                                <h3 class="section-title">${element.title}</h3>              
                                <p class="section-description">${element.description}</p>
                            </div>
                            <div class="row">
                                ${subarea}
                            </div>
                        </div>                    
                    </div>

                </div>
            </section>
            `
        });
        item += `<section id="contact">
        <div class="container">
          <div class="section-header">
            <h3 class="section-title">Contact</h3>
            
          </div>
        </div>
  
        <!-- Uncomment below if you wan to use dynamic maps -->
       
  
        <div class="container mt-5">
          <div class="row justify-content-center">
  
            <div class="col-lg-3 col-md-4">
  
              <div class="info">
                <div>
                  <i class="fa fa-map-marker"></i>
                  <p>A108 Adam Street<br>New York, NY 535022</p>
                </div>
  
                <div>
                  <i class="fa fa-envelope"></i>
                  <p>info@example.com</p>
                </div>
  
                <div>
                  <i class="fa fa-phone"></i>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
  
              <div class="social-links">
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
              </div>
  
            </div>
  
            <div class="col-lg-5 col-md-8">
              <div class="form">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
  
          </div>
  
        </div>
      </section><!-- End Contact Section -->`
        console.log('item',item);
        $('#main').append( item )
    })
    
}
<script>
 //Webflow CMS Filter with multiple dropdowns

$(document).ready(function() {
  	 var lifestyleoptions = [];
     var locations = [];
     $('.comm-flex-cl .comm-box-cli').each(function(){
       let parenthis = this;
       let lifestyle = $(this).find('.communities-location').text();
       let lifestyle_slug = $(this).find('.communities-location').text().toLowerCase().replace(/ /g, '-');
       locations.push(lifestyle);
       $(parenthis).addClass(lifestyle_slug);
       $(this).find('.cf-cl .comm-lifestyle-option').each(function() {
         let item = $(this).text().toLowerCase().replace(/ /g, '-');
         $(parenthis).addClass(item);
         lifestyleoptions.push($(this).text());
       });
     });
      lifestyleoptions = [...new Set(lifestyleoptions)];
      locations = [...new Set(locations)];
      $.each(lifestyleoptions, function(index, value) {
         $('.living-options').append($('<option>', {
              value: value.toLowerCase().replace(/ /g, '-'),
              text: value
          }));
      });
      $.each(locations, function(index, value) {
         $('.locations').append($('<option>', {
              value: value.toLowerCase().replace(/ /g, '-'),
              text: value
          }));
      });
      
     function filterCMSCards(){
     	 
       let living_opt_selected =  $('.living-options').val();
       let locations_selected = $('.locations').val();
       
       $('.comm-box-cli').css("display","none");
       
       if(living_opt_selected == "all"){
         $('.comm-flex-cl .comm-box-cli').each(function(){
            if($(this).hasClass(locations_selected)){
              $(this).css("display","block");
            }
         });
       }else if(locations_selected == "all"){
         $('.comm-flex-cl .comm-box-cli').each(function(){
            if( $(this).hasClass(living_opt_selected)){
              $(this).css("display","block");
            }
         });
       }else{
         $('.comm-flex-cl .comm-box-cli').each(function(){
            if( $(this).hasClass(living_opt_selected) && $(this).hasClass(locations_selected)){
              $(this).css("display","block");
            }
         });
       }
     }
     
     $('.btn-filter-search').click(function(){
     	filterCMSCards();
     });
      
     $('.living-options').change(function() {
        filterCMSCards();
      });
    	$('.locations').change(function() {
       filterCMSCards();
      });
      
});
</script>

'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('CandidatureController', ['soundcloudService', function(soundcloudService) {
        this.tastes = ['techno', 'rock', 'electronic', 'alternative rock', 'wankelmut', 'bear hands', 'manchester orchestra', 'linkin park', 'two door cinema club', 'imagine dragons', 'passenger', 'parov stelar', 'snow patrol', 'seether', 'passion pit', 'rem', 'peer kusiv'];
        this.matchCount = new Date();
    
        this.visitor = '';  


        this.userName = function() {
            if (this.visitor=='') {
                return ', hiring manager';
            }
            else{
                return ', ' + this.visitor;
            }
        };
    
        this.searchTerm = '';
        this.currentStreamedTrack = 0;
      
        this.tracks = soundcloudService.query();
      
       
        this.doSearch =function() {
            // stop the current streaming if so
            if (this.currentStreamedTrack != 0) {
                $('#stop-btn-track'+this.currentStreamedTrack).click();
            }
            
            if ($.inArray(this.searchTerm, this.tastes)) {
                ++this.matchCount;
            }
            switch(this.matchCount) {
                case 1:
                    alert('Cool, we will get along!');
                    break;
                case 2:
                    alert('Unbelievable!');
                    break;
                case 3:
                    alert('Definitely, RDV on soundcloud!');
                    break;
                default:
                    break;
                    
            }
               
            this.tracks = soundcloudService.query({q:this.searchTerm});
        } 
        
        
        
        this.playSound=function(track) {
            this.currentStreamedTrack = track.id;
            SC.stream("/tracks/" + track.id, function(sound){
                sound.play();

                $('#stop-btn-track'+track.id).click(function(e) {
                    e.preventDefault();
                    sound.stop();
                });
            });
        }  
  }]);

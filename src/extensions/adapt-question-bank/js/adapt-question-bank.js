define([
    'core/js/adapt'
], function (Adapt) {

    var QuestionBank = Backbone.View.extend({

        initialize: function () {
            if(!this.model.get('_questionBank')._isEnabled){
                return;
            }

            this.setUpModelForRandomization();
        },

        setUpModelForRandomization: function () {
            if(this.model.getChildren().length == this.model.get('_questionBank')._noOfQuestionsToBeSelected){
                return;
            }

            
            return this;
        }
    });

    function setUpQuestionBank() {
        _.each(this.articles.models, function(article){
            if(article.get('_questionBank')){
                new QuestionBank({
                    model: article
                });
            }
        });
    };

    Adapt.once("app:dataLoaded", setUpQuestionBank)
});

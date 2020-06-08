define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Native American', //Will appear in the data.
			title : {
				media : {word : 'Native American'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{image: 'native1.jpg'},
				{image: 'native2.jpg'},
				{image: 'native3.jpg'},
				{image: 'native4.jpg'},
				{image: 'native5.jpg'},
				{image: 'native6.jpg'},
				{image: 'native7.jpg'},
				{image: 'native8.jpg'}

			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Barack Obama', //Will appear in the data.
			title : {
				media : {word : 'Barack Obama'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
	{image: 'obama7.jpg'},
        		{image: 'obama8.jpg'},
        		{image: 'obama9.jpg'},
        		{image: 'obama10.jpg'},   
        		{image: 'obama11.jpg'},
        		{image: 'obama12.jpg'}	
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Foreign',
			title : {
				media : {word : 'Foreign'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{image: 'world2.jpg'},
				{image: 'world3.jpg'},
				{image: 'world5.jpg'},
				{image: 'world6.jpg'},
				{image: 'world7.jpg'}
				
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'American',
			title : {
				media : {word : 'American'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{image: 'us1.jpg'},
				{image: 'us2.jpg'},
				{image: 'us3.jpg'},
				{image: 'us4.jpg'},
				{image: 'us5.jpg'}			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://galmaimon.github.io/iatage'
		} 
	});
});

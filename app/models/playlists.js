module.exports = function(mongoose){
	var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId,

		song = new Schema ({
			artist   : { type: String, required: true, trim: false },
			name     : { type: String, required: true, trim: false },
			url 	 : { type: String, required: true, trim: false },
			albumArt : { type: String },
			meta	 : { 
						 likes: Number,
						 dislikes: Number
					   }
		}),

		playList = new Schema ({
			author	: ObjectId,
			title	: { type: String, required: true, trim: true },
			songs	: [song],
			created : Date,
			meta	: {
						upvotes		: Number,
						downvotes	: Number,
						tags		: [String],
						favs		: Number
					  }
		}),

		model = {
			Song: mongoose.model('Song', song),
			PlayList: mongoose.model('PlayList', playList)
		};
	return model;
}

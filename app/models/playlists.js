module.exports = function(mongoose){
	var Schema = mongoose.schema,
		ObjectId = Schema.ObjectId,

		song = new Schema {
			artist   : { type: String, required: true, trim: false },
			name     : { type: String, required: true, trim: false },
			url 	 : { type: String, required: true, trim: false },
			albumArt : { type: String },
			meta	 : { 
						 likes: Number,
						 dislikes: Number
					   }
		},
		playList = new Schema {
			author	: ObjectId,
			songs	: [song],
			meta	: {
						upvotes		: Number,
						downvotes	: Number,
						tags		: [String]
						favs		: Number
					  }
		}
}

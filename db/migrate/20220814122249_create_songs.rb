class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album_img
      t.string :song_url
      t.string :key_of_song
      t.integer :length
      t.integer :bpm
      t.integer :mood_rank

      t.timestamps
    end
  end
end

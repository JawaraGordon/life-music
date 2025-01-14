# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_23_010105) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorite_songs", force: :cascade do |t|
    t.bigint "song_id", null: false
    t.bigint "playlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["playlist_id"], name: "index_favorite_songs_on_playlist_id"
    t.index ["song_id"], name: "index_favorite_songs_on_song_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.datetime "date"
    t.integer "mood_rank"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "title"
    t.string "artist"
    t.string "album_img"
    t.string "song_url"
    t.string "key_of_song"
    t.integer "length"
    t.integer "bpm"
    t.integer "mood_rank"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "bio"
    t.string "location"
    t.string "age"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "favorite_songs", "playlists"
  add_foreign_key "favorite_songs", "songs"
  add_foreign_key "playlists", "users"
end

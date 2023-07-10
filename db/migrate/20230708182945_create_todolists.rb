class CreateTodolists < ActiveRecord::Migration[7.0]
  def change
    create_table :todolists do |t|
      t.string :title, null: false
      t.string :note, null: false

      t.timestamps
    end
  end
end

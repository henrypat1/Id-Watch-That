class AddHeaderToReview < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :header, :string
  end
end

class RemoveReviewFromMovie < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :review_id
  end
end

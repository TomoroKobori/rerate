class Project < ApplicationRecord
  enum status: { pending: 0, doing: 1, done: 2 }

  def attributes
    { title: nil, status: :pending, point: 0 }
  end
end

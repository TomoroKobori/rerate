class Project < ApplicationRecord
  enum status: { pending: 0, doing: 1, done: 2 }
end

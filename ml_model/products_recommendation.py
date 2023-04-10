import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import sys

prod_data = pd.read_csv('ml_model/product_data.csv',encoding='cp1252')

prod_data.head()

selected_features=['name','category','keywords']

for feature in selected_features:
  prod_data[feature]=prod_data[feature].fillna('')

combined_features= prod_data['name']+" "+prod_data['category']+" "+prod_data['keywords']

vectorizer= TfidfVectorizer()

feature_vector= vectorizer.fit_transform(combined_features)

similarity = cosine_similarity(feature_vector)

prod_name = sys.argv[1]

list_of_all_prods= prod_data['name'].tolist()
find_close_match=difflib.get_close_matches(prod_name,list_of_all_prods)

close_match=find_close_match[0]

prod_index= prod_data[prod_data.name == close_match]['index'].values[0]

similarity_score=list(enumerate(similarity[prod_index]))

sorted_list = sorted(similarity_score, key= lambda x:x[1], reverse=True)

trimmed_list= sorted_list[:10]
l1=[]
for songs in trimmed_list:
  index= songs[0]
  prod_name=prod_data[prod_data.index==index]['name'].values[0]
  print(prod_name)

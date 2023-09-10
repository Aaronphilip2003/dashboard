import React, { useEffect, useState } from "react";
import axios from "axios";

function HackerNewsComponent() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchTopStoryIds() {
      try {
        const response = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        );
        const topStoryIds = response.data.slice(0, 15); // Get the first 5 story IDs
        fetchStoriesDetails(topStoryIds);
      } catch (error) {
        console.error("Error fetching top story IDs");
      }
    }

    async function fetchStoriesDetails(ids) {
      const storyPromises = ids.map(async (id) => {
        try {
          const response = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          );
          return response.data;
        } catch (error) {
          console.error(`Error fetching story details for ID: ${id}`);
          return null;
        }
      });

      const resolvedStories = await Promise.all(storyPromises);
      setStories(resolvedStories.filter((story) => story !== null));
    }

    fetchTopStoryIds();
  }, []);

  return (
    <div>
      <h1>Hacker News Stories</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HackerNewsComponent;

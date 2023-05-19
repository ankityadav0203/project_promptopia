import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, editPostHandler, deletePostHandler }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="feed">
        <div className="mt-10 prompt_layout">
          {data.map((post) => {
            return (
              <PromptCard
                key={post._id}
                post={post}
                editPostHandler={() => editPostHandler && editPostHandler(post)}
                deletePostHandler={() =>
                  deletePostHandler && deletePostHandler(post)
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;

const ProfileImageUpload = ({ image, setImage }) => {
  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      setImage(URL.createObjectURL(event.target.files[0])); // Set image preview
    }
  };

  return (
    <div className='flex flex-col items-center space-y-2'>
      <label htmlFor='image-upload' className='cursor-pointer'>
        <input
          id='image-upload'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='sr-only'
        />
        {image ? (
          <img
            src={image}
            alt='Student'
            className='h-36 w-36 rounded-full object-cover border-4 border-purple-600'
          />
        ) : (
          <div className='h-36 w-36 flex items-center justify-center'>
            <div className='relative flex items-center justify-center h-full w-full'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-gray-500'>No Image</span>
              </div>
              <div className='absolute flex items-center justify-center h-20 w-20 rounded-full bg-purple-600 text-white'>
                <span className='text-sm'>Upload Image</span>
              </div>
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default ProfileImageUpload;

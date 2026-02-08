import multer from 'multer';

const multerUpload = multer({
    limits: {
        fileSize: 1024 * 1024 * 5, // Limit file size to 5MB
    },
});

const singleAvatar = multerUpload.single('avatar'); // Middleware for single file upload with field name 'avatar'

const attachmentsMulter = multerUpload.array('files', 5); // Middleware for multiple file uploads with field name 'files' and limit of 5 files

export { singleAvatar, attachmentsMulter }; // Export the middleware functions for use in routes
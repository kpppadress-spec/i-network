# Deployment Guide for Vercel

## Environment Variables

**No environment variables required!** The application uses static in-memory data storage.

## Important Notes

1. **Static Data Storage**: The application uses in-memory data storage. API data will reset on server restart or when the serverless function restarts.

2. **Build Configuration**: The `vercel.json` file is configured to use `--legacy-peer-deps` for npm install to resolve dependency conflicts.

3. **If Deployment Fails**: 
   - Check Vercel build logs for specific errors
   - Try redeploying (sometimes Vercel has transient errors)

## Deployment Steps

1. Push your code to GitHub
2. Import the project in Vercel (or it will auto-deploy if already connected)
3. Deploy - no additional configuration needed!

The build should complete successfully. If deployment fails, it's likely a transient Vercel issue - try redeploying.

## Production Considerations

For production use with persistent data, consider:
- Implementing a database (PostgreSQL, MongoDB, etc.)
- Using an external storage service
- Implementing file-based storage
- Using a state management service

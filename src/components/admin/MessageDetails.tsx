import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar, MessageSquare } from 'lucide-react';
import { ContactSubmission } from './MessageList';

interface MessageDetailsProps {
  submission: ContactSubmission | null;
  onMarkAsRead: (id: string) => void;
}

const MessageDetails = ({ submission, onMarkAsRead }: MessageDetailsProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!submission) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-muted-foreground">
        <MessageSquare className="w-12 h-12 mb-4" />
        <p>Select a message to view details</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Message Details
        </h3>
        <Badge
          variant={submission.status === 'new' ? 'default' : 'secondary'}
          className={submission.status === 'new' ? 'bg-primary' : ''}
        >
          {submission.status === 'new' ? 'New' : 'Read'}
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-foreground">{submission.name}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href={`mailto:${submission.email}`}
              className="text-primary hover:underline"
            >
              {submission.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm text-muted-foreground">Date</p>
            <p className="text-foreground">
              {formatDate(submission.created_at)}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Subject</p>
          <p className="text-foreground font-medium">
            {submission.subject}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Message</p>
          <p className="text-foreground whitespace-pre-wrap">
            {submission.message}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-border space-y-3">
        {submission.status === 'new' && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onMarkAsRead(submission.id)}
          >
            Mark as Read
          </Button>
        )}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = `mailto:${submission.email}?subject=Re: ${submission.subject}`}
        >
          <Mail className="w-4 h-4 mr-2" />
          Reply via Email
        </Button>
      </div>
    </div>
  );
};

export default MessageDetails;

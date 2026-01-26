import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2, Inbox, Mail } from 'lucide-react';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

interface MessageListProps {
  submissions: ContactSubmission[];
  loading: boolean;
  selectedId: string | null;
  onSelect: (submission: ContactSubmission) => void;
  onDelete: (id: string) => void;
}

const MessageList = ({ submissions, loading, selectedId, onSelect, onDelete }: MessageListProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Inbox className="w-12 h-12 mb-4" />
        <p>No contact submissions yet</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow
              key={submission.id}
              className={`cursor-pointer transition-colors ${
                selectedId === submission.id
                  ? 'bg-primary/10'
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => onSelect(submission)}
            >
              <TableCell>
                <Badge
                  variant={submission.status === 'new' ? 'default' : 'secondary'}
                  className={submission.status === 'new' ? 'bg-primary' : ''}
                >
                  {submission.status === 'new' ? (
                    <><Mail className="w-3 h-3 mr-1" /> New</>
                  ) : (
                    'Read'
                  )}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">{submission.name}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {submission.subject}
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {formatDate(submission.created_at)}
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Message</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this message from {submission.name}? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(submission.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MessageList;

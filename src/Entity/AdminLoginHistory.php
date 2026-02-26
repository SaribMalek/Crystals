<?php

namespace App\Entity;

use App\Repository\AdminLoginHistoryRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AdminLoginHistoryRepository::class)]
#[ORM\Table(name: 'admin_login_history')]
class AdminLoginHistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(onDelete: 'SET NULL', nullable: true)]
    private ?User $user = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    #[ORM\Column(length: 45, nullable: true)]
    private ?string $ip_address = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $user_agent = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $logged_in_at = null;

    public function __construct()
    {
        $this->logged_in_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = strtolower(trim($email));

        return $this;
    }

    public function getIpAddress(): ?string
    {
        return $this->ip_address;
    }

    public function setIpAddress(?string $ip_address): static
    {
        $this->ip_address = $ip_address;

        return $this;
    }

    public function getUserAgent(): ?string
    {
        return $this->user_agent;
    }

    public function setUserAgent(?string $user_agent): static
    {
        $this->user_agent = $user_agent;

        return $this;
    }

    public function getLoggedInAt(): ?\DateTimeImmutable
    {
        return $this->logged_in_at;
    }

    public function setLoggedInAt(\DateTimeImmutable $logged_in_at): static
    {
        $this->logged_in_at = $logged_in_at;

        return $this;
    }
}

